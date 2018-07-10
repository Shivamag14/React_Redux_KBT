import {
    userConstants
} from '../_constants';

const initialState = {
    clientList: [],
    locationList: [],
    deviceList: [],
    tonerWastageData: {
        labels: [],
        datasets: [{
                label: "Cyan Levels",
                data: [],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBorderWidth: 2,
                hoverBorderColor: "%000"
            },
            {
                label: "Magenta Levels",
                data: [],
                fontFamily: "cursive",
                backgroundColor: "rgba(255, 159, 64, 0.2)",
                borderColor: "rgba(255, 159, 64, 1)",
                borderWidth: 1,
                hoverBorderWidth: 2,
                hoverBorderColor: "%000"
            },
            {
                label: "Yellow Levels",
                data: [],
                fontFamily: "cursive",
                backgroundColor: "rgba(255, 206, 86, 0.2)",
                borderColor: "rgba(255, 206, 86, 1)",
                borderWidth: 1,
                hoverBorderWidth: 2,
                hoverBorderColor: "%000"
            },
            {
                label: "Mono Levels",
                data: [],
                fontFamily: "cursive",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
                hoverBorderWidth: 2,
                hoverBorderColor: "%000"
            },
            {
                label: "Others Levels",
                data: [],
                fontFamily: "cursive",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
                hoverBorderWidth: 2,
                hoverBorderColor: "%000"
            }
        ]
    },
    impressionData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
                label: "Mono Impressions",
                data: [],
                fontFamily: "cursive",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBorderWidth: 2,
                hoverBorderColor: "%000"
            },
            {
                label: "Color Impressions",
                data: [],
                fontFamily: "cursive",
                backgroundColor: "rgba(255, 159, 64, 0.2)",
                borderColor: "rgba(255, 159, 64, 1)",
                borderWidth: 1,
                hoverBorderWidth: 2,
                hoverBorderColor: "%000"
            }
        ]
    }

};

export function userReducer(state = initialState, action) {
    // console.log("previous state: ", state);
    switch (action.type) {
        case userConstants.REQUEST:
            return {
                ...state,
                loading: true
            };
        case userConstants.GET_ALL_CLIENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                clientList: action.payload
            };
        case userConstants.GET_ALL_CLIENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case userConstants.GET_ALL_LOCATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                locationList: action.payload
            };
        case userConstants.GET_ALL_LOCATIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case userConstants.GET_ALL_DEVICES_SUCCESS:
            return {
                ...state,
                loading: false,
                deviceList: action.payload
            };
        case userConstants.GET_ALL_DEVICES_FAILURE:
            return {
                ...state,
                loading: false,
                deviceList: action.payload,
                error: action.error
            };
        case userConstants.GET_ALL_TONNER_WASTAGE_SUCCESS:
            return tonerDataManipulation(state, action);
        case userConstants.GET_ALL_TONER_WASTAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case userConstants.GET_TONER_WASTAGE_FILTERED_DATA_SUCCESS:
            return tonerFilteredDataManipulation(state, action);
        case userConstants.GET_TONER_WASTAGE_FILTERED_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state
    }
}

function tonerDataManipulation(state, action) {

    let tonerData = action.payload;
    let monthList = [];
    let intMonthArray = [];
    let cyanDataSet = [];
    let magentaDataSet = [];
    let yellowDataSet = [];
    let monoDataSet = [];
    let othersDataSet = [];
    let monoImpressionsData = [];
    let colorImpressionsData = []

    for (const data of tonerData) {
        intMonthArray.push(data.month);
        cyanDataSet.push(data.cyanAvr);
        magentaDataSet.push(data.magentaAvr);
        yellowDataSet.push(data.yellowAvr);
        monoDataSet.push(data.monoAvr);
        othersDataSet.push(data.othersAvr);
        monoImpressionsData.push(data.monoImpressions);
        colorImpressionsData.push(data.colorImpressions);
    }
    monthList = convertMonth(intMonthArray);

    return {
        ...state,
        loading: false,
        tonerWastageData: {
            // ...state,
            // labels: [
            //     "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
            //     "Oct", "Nov", "Dec"
            // ],
            labels: monthList,
            datasets: [{
                    label: "Cyan Levels",
                    data: cyanDataSet,
                    fontFamily: "cursive",
                    backgroundColor: "rgba(0,255,255, 0.6)",
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: "%000"
                },
                {
                    label: "Magenta Levels",
                    data: magentaDataSet,
                    fontFamily: "cursive",
                    backgroundColor: "rgba(255,0,255, 0.6)",
                    borderColor: "rgba(255, 159, 64, 1)",
                    borderWidth: 1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: "%000"
                },
                {
                    label: "Yellow Levels",
                    data: yellowDataSet,
                    fontFamily: "cursive",
                    backgroundColor: "rgba(255,255,0,0.6)",
                    borderColor: "rgba(255, 206, 86, 1)",
                    borderWidth: 1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: "%000"
                },
                {
                    label: "Mono Levels",
                    data: monoDataSet,
                    fontFamily: "cursive",
                    backgroundColor: "rgba(0,0,0, 0.6)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: "%000"
                },
                {
                    label: "Others Levels",
                    data: othersDataSet,
                    fontFamily: "cursive",
                    backgroundColor: "rgba(75, 192, 192, 0.6)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: "%000"
                }
            ]
        },
        impressionData: {
            labels: [
                "1", "2", "3", "4", "5", "6", "30"
            ],
            // labels: monthList,
            datasets: [{
                    label: "Mono Impressions",
                    data: [12, 12, 23, 34, 4, 5, 45],
                    fontFamily: "cursive",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    borderColor: "rgba(0,0,0,1)",
                    borderWidth: 1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: "%000"
                },
                {
                    label: "Color Impressions",
                    data: colorImpressionsData,
                    fontFamily: "cursive",
                    backgroundColor: "rgba(255, 159, 64, 0.2)",
                    borderColor: "rgba(255, 159, 64, 1)",
                    borderWidth: 1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: "%000"
                }
            ]
        }
    }
}

function tonerFilteredDataManipulation(state, action) {

    let tonerFilteredData = action.payload;

    let monthList = [];
    let intMonthArray = [];
    let cyanDataSet = [];
    let magentaDataSet = [];
    let yellowDataSet = [];
    let monoDataSet = [];
    let othersDataSet = [];
    let monoImpressionsData = [];
    let colorImpressionsData = [];

    for (const data of tonerFilteredData) {
        intMonthArray.push(data.month);
        cyanDataSet.push(data.cyanAvr);
        magentaDataSet.push(data.magentaAvr);
        yellowDataSet.push(data.yellowAvr);
        monoDataSet.push(data.monoAvr);
        othersDataSet.push(data.othersAvr);
        monoImpressionsData.push(data.monoImpressions);
        colorImpressionsData.push(data.colorImpressions);
    }

    monthList = convertMonth(intMonthArray);

    return {
        ...state,
        loading: false,
        tonerWastageData: {
            labels: monthList,
            datasets: [{
                    label: "Cyan Levels",
                    data: cyanDataSet,
                    fontFamily: "cursive",
                    backgroundColor: "rgba(0,255,255,0.6)",
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: "%000"
                },
                {
                    label: "Magenta Levels",
                    data: magentaDataSet,
                    fontFamily: "cursive",
                    backgroundColor: "rgba(255,0,255, 0.6)",
                    borderColor: "rgba(255, 159, 64, 1)",
                    borderWidth: 1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: "%000"
                },
                {
                    label: "Yellow Levels",
                    data: yellowDataSet,
                    fontFamily: "cursive",
                    backgroundColor: "rgba(255,255,0,0.6)",
                    borderColor: "rgba(255, 206, 86, 1)",
                    borderWidth: 1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: "%000"
                },
                {
                    label: "Mono Levels",
                    data: monoDataSet,
                    fontFamily: "cursive",
                    backgroundColor: "rgba(0,0,0, 0.6)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: "%000"
                },
                {
                    label: "Others Levels",
                    data: othersDataSet,
                    fontFamily: "cursive",
                    backgroundColor: "rgba(75, 192, 192, 0.6)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: "%000"
                }
            ]
        },
        impressionData: {
            labels: monthList,
            datasets: [{
                    label: "Mono Impressions",
                    data: monoImpressionsData,
                    fontFamily: "cursive",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    borderColor: "rgba(0,0,0,1)",
                    borderWidth: 1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: "%000"
                },
                {
                    label: "Color Impressions",
                    data: colorImpressionsData,
                    fontFamily: "cursive",
                    backgroundColor: "rgba(255, 159, 64, 0.2)",
                    borderColor: "rgba(255, 159, 64, 1)",
                    borderWidth: 1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: "%000"
                }
            ]
        }
    }
}

function convertMonth(monthList) {
    let monthArray = [
        "0", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
        "Oct", "Nov", "Dec"
    ];

    monthList.forEach((month, index) => {
        for (let i = 1; i <= 12; i++) {
            if (month === i.toString()) {
                monthList[index] = monthArray[i];
            }
        }
    });
    return monthList;
};