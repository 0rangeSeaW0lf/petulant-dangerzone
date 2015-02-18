'use strict';

angular.module('escalada')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    var req = {
      method: 'GET',
      //url: 'https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list',
      url: 'https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/1/detail', // ../{product_id}/detail
      headers: {
        'Content-Type': 'application/json',
        // 'Origin':'https://petulant-dangerzone-jmorenor.c9.io',
        'Access-Control-Allow-Origin': 'https://petulant-dangerzone-jmorenor.c9.io',
        //'Access-Control-Allow-Origin': 'http://localhost',
        //'Access-Control-Allow-Origin': '*',
      }
      // , data: { test: 'test' },
      };
    $http(req).success(function(data, status, headers, config){
      console.log("-------------------------------------------");
      console.log("Yep!");
      console.log(status);
      console.log(headers);
      console.log(data);
      console.log("-------------------------------------------");
    }).
    error(function(data, status, headers, config) {
      console.log("-------------------------------------------");
      console.log("Nope");
      console.log(status);
      console.log(headers);
      console.log("-------------------------------------------");
    });
    $http.jsonp('https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/1/detail',
                {headers: {
                  'Content-Type': 'application/json',
                  // 'Origin':'https://petulant-dangerzone-jmorenor.c9.io',
                  'Access-Control-Allow-Origin': 'https://petulant-dangerzone-jmorenor.c9.io',
                  //'Access-Control-Allow-Origin': 'http://localhost',
                  //'Access-Control-Allow-Origin': '*',
                }

    }).success(function(data, status, headers, config){
      console.log("-------------------------------------------");
      console.log("Yep!");
      console.log(status);
      console.log(headers);
      console.log(data);
      console.log("-------------------------------------------");
    }).
    error(function(data, status, headers, config) {
      console.log("-------------------------------------------");
      console.log("Nope");
      console.log(status);
      console.log(headers);
      console.log("-------------------------------------------");
    });
  }]);