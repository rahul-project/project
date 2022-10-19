var app = angular.module('myApp', [])
app.controller('personCtrl', function ($scope) {
  // --------------------- DATA ----------------------//
  ;($scope.Student_10A_1 = {
    id: '1',
    name: 'Itachi Uchiha',
    class: '10A',
    seat: '15',
    rank: '1',
    hairColor: 'Jet black',
    Eyes: 'Onyx',
    gender: 'M',
    desc: 'A very complex character.',
  }),
    ($scope.Student_10A_2 = {
      id: '2',
      name: 'Natsu Dragneel',
      class: '10A',
      seat: '10',
      rank: '12',
      hairColor: 'Pink',
      Eyes: 'Black',
      gender: 'M',
      desc: 'Carefree and reckless in nature, but loyal and protective',
    }),
    ($scope.Student_10A_3 = {
      id: '3',
      name: 'Tanjiro Kamado',
      class: '10A',
      seat: '11',
      rank: '3',
      hairColor: 'Black to Red',
      Eyes: 'Dark red',
      gender: 'M',
      desc: 'Has a scar on his forehead that keeps changing',
    }),
    ($scope.Student_10A_4 = {
      id: '4',
      name: 'Akane Tsunemori',
      class: '10A',
      seat: '11',
      rank: '2',
      hairColor: 'Brown',
      Eyes: 'Brown',
      gender: 'F',
      desc: 'Aims to be an Inspector',
    }),
    ($scope.Student_10B_1 = {
      id: '1',
      name: 'Levi Ackerman',
      class: '10B',
      seat: '10',
      rank: '1',
      hairColor: 'Black',
      Eyes: 'Black',
      gender: 'M',
      desc:
        'Harsh and unsocial personality, but still he is highly regarded by his peers.',
    }),
    ($scope.Student_10B_2 = {
      id: '2',
      name: 'Tamaki Suoh',
      class: '10B',
      seat: '10',
      rank: '3',
      hairColor: 'Pale-blond',
      Eyes: 'Violet',
      gender: 'M',
      desc: 'The co-founder and president of the Host Club',
    }),
    ($scope.Student_10B_3 = {
      id: '3',
      name: 'Atsushi Nakajima',
      class: '10B',
      seat: '10',
      rank: '5',
      hairColor: 'Light grey',
      Eyes: 'Mix of purple and yellow',
      gender: 'M',
      desc:
        'He has segmental heterochromia, consisting of purple with yellow along the bottom curve of his pupil.',
    }),
    // ------------------------- DATA ----------------------//

    // ------------------ FUNC  FOR '>' THIS ---------------//

    ($scope.showS1 = false)
  $scope.Student1 = function () {
    $scope.showS1 = true
  }
  $scope.showH1 = function () {
    $scope.showS1 = false
  }

  $scope.showS2 = false
  $scope.Student2 = function () {
    $scope.showS2 = true
  }
  $scope.showH2 = function () {
    $scope.showS2 = false
  }

  $scope.showS3 = false
  $scope.Student3 = function () {
    $scope.showS3 = true
  }
  $scope.showH3 = function () {
    $scope.showS3 = false
  }

  $scope.showS4 = false
  $scope.Student4 = function () {
    $scope.showS4 = true
  }
  $scope.showH4 = function () {
    $scope.showS4 = false
  }

  $scope.showS5 = false
  $scope.Student5 = function () {
    $scope.showS5 = true
  }
  $scope.showH5 = function () {
    $scope.showS5 = false
  }

  $scope.showS6 = false
  $scope.Student6 = function () {
    $scope.showS6 = true
  }
  $scope.showH6 = function () {
    $scope.showS6 = false
  }

  $scope.showS7 = false
  $scope.Student7 = function () {
    $scope.showS7 = true
  }
  $scope.showH7 = function () {
    $scope.showS7 = false
  }

  // ------------------ FUNC  FOR '>' THIS ---------------//

  // ------------------ FUNC  FOR 'NAME NAME' THIS ---------------//

  // ------------------ FUNC  FOR 'NAME NAME' THIS ---------------//
})
