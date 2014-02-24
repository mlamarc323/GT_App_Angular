'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.sortorder = 'name';
        
        $scope.myStyle = { color: 'red' };
        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.facility = [{
                name: 'Aldeen Golf Club',
                location: {
                    address: '123 Reid Farm Rd',
                    city: 'Rockford',
                    Province: 'IL',
                    Zip: '61114',
                    Phone: '815-282-4653'
                },
                courses: [
                    {
                        name: 'Front 9',
                        TeeType: [
                            {
                                name: 'Gold',
                                rating: '36.6',
                                slope: '71',
                                Hole: [
                                    {
                                        number: '1',
                                        yardage: 525,
                                        par: 5
                                    },
                                    {
                                        number: '2',
                                        yardage: 429,
                                        par: 4
                                    },
                                    {
                                        number: '3',
                                        yardage: 403,
                                        par: 4
                                    },
                                    {
                                        number: '4',
                                        yardage: 430,
                                        par: 4
                                    },
                                    {
                                        number: '5',
                                        yardage: 165,
                                        par: 3
                                    },
                                    {
                                        number: '6',
                                        yardage: 558,
                                        par: 5
                                    },
                                    {
                                        number: '7',
                                        yardage: 347,
                                        par: 4
                                    },
                                    {
                                        number: '8',
                                        yardage: 169,
                                        par: 3
                                    },
                                    {
                                        number: '9',
                                        yardage: 460,
                                        par: 4
                                    }
                                ]
                            },
                            {
                                name: 'Blue',
                                rating: '35.7',
                                slope: '66',
                                Hole: [
                                    {
                                        number: '1',
                                        yardage: 487,
                                        par: 5
                                    },
                                    {
                                        number: '2',
                                        yardage: 392,
                                        par: 4
                                    },
                                    {
                                        number: '3',
                                        yardage: 365,
                                        par: 4
                                    },
                                    {
                                        number: '4',
                                        yardage: 380,
                                        par: 4
                                    },
                                    {
                                        number: '5',
                                        yardage: 130,
                                        par: 3
                                    },
                                    {
                                        number: '6',
                                        yardage: 519,
                                        par: 5
                                    },
                                    {
                                        number: '7',
                                        yardage: 315,
                                        par: 4
                                    },
                                    {
                                        number: '8',
                                        yardage: 140,
                                        par: 3
                                    },
                                    {
                                        number: '9',
                                        yardage: 417,
                                        par: 4
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Back 9',
                        TeeType: [
                            {
                                name: 'Gold',
                                rating: '36.6',
                                slope: '71',
                                Hole: [
                                    {
                                        number: '10',
                                        yardage: 525,
                                        par: 5
                                    },
                                    {
                                        number: '11',
                                        yardage: 429,
                                        par: 4
                                    },
                                    {
                                        number: '12',
                                        yardage: 403,
                                        par: 4
                                    },
                                    {
                                        number: '13',
                                        yardage: 430,
                                        par: 4
                                    },
                                    {
                                        number: '14',
                                        yardage: 165,
                                        par: 3
                                    },
                                    {
                                        number: '15',
                                        yardage: 558,
                                        par: 5
                                    },
                                    {
                                        number: '16',
                                        yardage: 347,
                                        par: 4
                                    },
                                    {
                                        number: '17',
                                        yardage: 169,
                                        par: 3
                                    },
                                    {
                                        number: '18',
                                        yardage: 460,
                                        par: 4
                                    }
                                ]
                            },
                            {
                                name: 'Blue',
                                rating: '35.7',
                                slope: '66',
                                Hole: [
                                    {
                                        number: '10',
                                        yardage: 487,
                                        par: 5
                                    },
                                    {
                                        number: '11',
                                        yardage: 392,
                                        par: 4
                                    },
                                    {
                                        number: '12',
                                        yardage: 365,
                                        par: 4
                                    },
                                    {
                                        number: '13',
                                        yardage: 380,
                                        par: 4
                                    },
                                    {
                                        number: '14',
                                        yardage: 130,
                                        par: 3
                                    },
                                    {
                                        number: '15',
                                        yardage: 519,
                                        par: 5
                                    },
                                    {
                                        number: '16',
                                        yardage: 315,
                                        par: 4
                                    },
                                    {
                                        number: '17',
                                        yardage: 140,
                                        par: 3
                                    },
                                    {
                                        number: '18',
                                        yardage: 417,
                                        par: 4
                                    }
                                ]
                            }
                        ]
                    },
                ]
        },
            {
                name: 'Sandy Hollow',
                location: {
                    address: '456 Sandy Hollow Rd',
                    city: 'Rockford',
                    Province: 'IL',
                    Zip: '61109',
                    Phone: '815-987-8836'
                },
                courses: [
                    {
                        name: 'Sandy',
                        TeeType: [
                            {
                                name: 'Orange',
                                rating: '36.6',
                                slope: '71',
                                Hole: [
                                    {
                                        number: '1',
                                        yardage: 525,
                                        par: 5
                                    },
                                    {
                                        number: '2',
                                        yardage: 429,
                                        par: 4
                                    },
                                    {
                                        number: '3',
                                        yardage: 403,
                                        par: 4
                                    },
                                    {
                                        number: '4',
                                        yardage: 430,
                                        par: 4
                                    },
                                    {
                                        number: '5',
                                        yardage: 165,
                                        par: 3
                                    },
                                    {
                                        number: '6',
                                        yardage: 558,
                                        par: 5
                                    },
                                    {
                                        number: '7',
                                        yardage: 347,
                                        par: 4
                                    },
                                    {
                                        number: '8',
                                        yardage: 169,
                                        par: 3
                                    },
                                    {
                                        number: '9',
                                        yardage: 460,
                                        par: 4
                                    }
                                ]
                            },
                            {
                                name: 'White',
                                rating: '35.7',
                                slope: '66',
                                Hole: [
                                    {
                                        number: '1',
                                        yardage: 487,
                                        par: 5
                                    },
                                    {
                                        number: '2',
                                        yardage: 392,
                                        par: 4
                                    },
                                    {
                                        number: '3',
                                        yardage: 365,
                                        par: 4
                                    },
                                    {
                                        number: '4',
                                        yardage: 380,
                                        par: 4
                                    },
                                    {
                                        number: '5',
                                        yardage: 130,
                                        par: 3
                                    },
                                    {
                                        number: '6',
                                        yardage: 519,
                                        par: 5
                                    },
                                    {
                                        number: '7',
                                        yardage: 315,
                                        par: 4
                                    },
                                    {
                                        number: '8',
                                        yardage: 140,
                                        par: 3
                                    },
                                    {
                                        number: '9',
                                        yardage: 417,
                                        par: 4
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Hollow',
                        TeeType: [
                            {
                                name: 'Orange',
                                rating: '36.6',
                                slope: '71',
                                Hole: [
                                    {
                                        number: '10',
                                        yardage: 525,
                                        par: 5
                                    },
                                    {
                                        number: '11',
                                        yardage: 429,
                                        par: 4
                                    },
                                    {
                                        number: '12',
                                        yardage: 403,
                                        par: 4
                                    },
                                    {
                                        number: '13',
                                        yardage: 430,
                                        par: 4
                                    },
                                    {
                                        number: '14',
                                        yardage: 165,
                                        par: 3
                                    },
                                    {
                                        number: '15',
                                        yardage: 558,
                                        par: 5
                                    },
                                    {
                                        number: '16',
                                        yardage: 347,
                                        par: 4
                                    },
                                    {
                                        number: '17',
                                        yardage: 169,
                                        par: 3
                                    },
                                    {
                                        number: '18',
                                        yardage: 460,
                                        par: 4
                                    }
                                ]
                            },
                            {
                                name: 'White',
                                rating: '35.7',
                                slope: '66',
                                Hole: [
                                    {
                                        number: '10',
                                        yardage: 487,
                                        par: 5
                                    },
                                    {
                                        number: '11',
                                        yardage: 392,
                                        par: 4
                                    },
                                    {
                                        number: '12',
                                        yardage: 365,
                                        par: 4
                                    },
                                    {
                                        number: '13',
                                        yardage: 380,
                                        par: 4
                                    },
                                    {
                                        number: '14',
                                        yardage: 130,
                                        par: 3
                                    },
                                    {
                                        number: '15',
                                        yardage: 519,
                                        par: 5
                                    },
                                    {
                                        number: '16',
                                        yardage: 315,
                                        par: 4
                                    },
                                    {
                                        number: '17',
                                        yardage: 140,
                                        par: 3
                                    },
                                    {
                                        number: '18',
                                        yardage: 417,
                                        par: 4
                                    }
                                ]
                            }
                        ]
                    },
                ]
            }
        ];
        

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

$scope.downVoteSession = function(session) {
    session.upVoteCount--;
};

}
);