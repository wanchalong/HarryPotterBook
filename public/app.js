/* global angular */
angular.module('todoApp', [])
  .controller('TodoListController', function ($scope) {
    $scope.book = [
      {
        id: 1,
        name: 'แฮร์รี่ พอตเตอร์กับศิลาอาถรรพ์',
        price: 100,
        img: '1.jpg',
        amount: 1
      },

      {
        id: 2,
        name: 'แฮร์รี่ พอตเตอร์กับห้องแห่งความลับ',
        price: 100,
        img: '2.jpg',
        amount: 1
      },

      {
        id: 3,
        name: 'แฮร์รี่ พอตเตอร์กับนักโทษแห่งอัซคาบัน',
        price: 100,
        img: '3.jpg',
        amount: 1
      },

      {
        id: 4,
        name: 'แฮร์รี่ พอตเตอร์กับถ้วยอัคนี',
        price: 100,
        img: '4.jpg',
        amount: 1
      },

      {
        id: 5,
        name: 'แฮร์รี่ พอตเตอร์กับภาคีนกฟีนิกซ์',
        price: 100,
        img: '5.jpg',
        amount: 1
      },

      {
        id: 6,
        name: 'แฮร์รี่ พอตเตอร์กับเจ้าชายเลือดผสม',
        price: 100,
        img: '6.jpg',
        amount: 1
      },

      {
        id: 7,
        name: 'แฮร์รี่ พอตเตอร์กับเครื่องรางยมทูต',
        price: 100,
        img: '7.jpg',
        amount: 1
      }

    ]
    $scope.sum = 0
    $scope.choose = []
    var index = 0
    $scope.add = function (data) {
      if ($scope.checkadd(data.id)) {
        index = $scope.checkindex(data.id)
        $scope.choose.splice(index, 1, {
          id: data.id,
          name: data.name,
          price: data.price,
          img: data.img,
          amount: data.amount += 1
        })
        $scope.sum += 100
      } else {
        $scope.choose.push(data)
        $scope.sum += 100
      }

      $scope.check = true
      $scope.choose.sort(function (a, b) {
        if (a.amount > b.amount) return -1
        if (a.amount < b.amount) return 1
        return 0
      })

      $scope.amount = []
      for (var i = 0; i < $scope.choose.length; i++) {
        $scope.amount.push($scope.choose[i].amount)
      }
      $scope.discount($scope.amount)
    }

    $scope.checkadd = function (id) {
      for (var ch_data = 0; ch_data < $scope.choose.length; ch_data++) {
        if ($scope.choose[ch_data].id === id) {
          return true
        }
      }
    }

    $scope.checkindex = function (id) {
      for (var ch_index = 0; ch_index < $scope.choose.length; ch_index++) {
        if ($scope.choose[ch_index].id === id) {
          return ch_index
        }
      }
    }

    $scope.del = function (index) {
      if ($scope.choose[index].amount === 1) {
        $scope.choose.splice(index, 1)
      } else {
        $scope.choose[index].amount -= 1
        $scope.sum -= 100
      }
      $scope.amount = []
      for (var i = 0; i < $scope.choose.length; i++) {
        $scope.amount.push($scope.choose[i].amount)
      }
      $scope.discount($scope.amount)
    }

    $scope.discount = function (amount) {
      $scope.sell = 0
      var countlist = 0 // เช็ครอบเข้า เงื่อนไขลดราคา
      var exit = 0
      do {
        // /////// for เช็ค จำนวนเล่มหนังสือ
        for (var i = 0; i < amount.length; i++) {
          if (amount[i] !== 0) {
            countlist += 1
          }
          if (amount[i] === 0) {
            countlist += 0
            break
          }
        }
        // ///// เงื่อนไขลดราคา
        if (countlist === 1) {
          // มีไว้เฉยๆๆ ไม่มีทำงานไม่ได้
          console.log('1')
        }
        if (countlist === 2) {
          $scope.sell += ((countlist * 100) * 0.1)
          console.log('2')
        } else if (countlist === 3) {
          $scope.sell += ((countlist * 100) * 0.2)
          console.log('3')
        } else if (countlist === 4) {
          $scope.sell += ((countlist * 100) * 0.3)
          console.log('4')
        } else if (countlist === 5) {
          $scope.sell += ((countlist * 100) * 0.4)
          console.log('5')
        } else if (countlist === 6) {
          $scope.sell += ((countlist * 100) * 0.5)
          console.log('6')
        } else if (countlist === 7) {
          $scope.sell += ((countlist * 100) * 0.6)
          console.log('7')
        } else if (countlist === 0) {
          exit = 1
          console.log('exit')
        }
        // // ลบ จำนวนออกทีละ 1
        for (var o = 0; o < amount.length; o++) {
          if (amount[o] > 0) {
            amount[o] -= 1
            countlist = 0 // รีค่าใหม่
          }
        }
      } while (exit !== 1)
      console.log($scope.sell)
    }
  })
