var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50",
        "ok": "0",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "421",
        "ok": "-",
        "ko": "421"
    },
    "maxResponseTime": {
        "total": "719",
        "ok": "-",
        "ko": "719"
    },
    "meanResponseTime": {
        "total": "602",
        "ok": "-",
        "ko": "602"
    },
    "standardDeviation": {
        "total": "67",
        "ok": "-",
        "ko": "67"
    },
    "percentiles1": {
        "total": "603",
        "ok": "-",
        "ko": "603"
    },
    "percentiles2": {
        "total": "646",
        "ok": "-",
        "ko": "646"
    },
    "percentiles3": {
        "total": "700",
        "ok": "-",
        "ko": "700"
    },
    "percentiles4": {
        "total": "714",
        "ok": "-",
        "ko": "714"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 50,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    }
},
contents: {
"req_home-page-93c4f": {
        type: "REQUEST",
        name: "home_page",
path: "home_page",
pathFormatted: "req_home-page-93c4f",
stats: {
    "name": "home_page",
    "numberOfRequests": {
        "total": "50",
        "ok": "0",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "421",
        "ok": "-",
        "ko": "421"
    },
    "maxResponseTime": {
        "total": "719",
        "ok": "-",
        "ko": "719"
    },
    "meanResponseTime": {
        "total": "602",
        "ok": "-",
        "ko": "602"
    },
    "standardDeviation": {
        "total": "67",
        "ok": "-",
        "ko": "67"
    },
    "percentiles1": {
        "total": "603",
        "ok": "-",
        "ko": "603"
    },
    "percentiles2": {
        "total": "646",
        "ok": "-",
        "ko": "646"
    },
    "percentiles3": {
        "total": "700",
        "ok": "-",
        "ko": "700"
    },
    "percentiles4": {
        "total": "714",
        "ok": "-",
        "ko": "714"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 50,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
