function HomeController($scope, $filter) {

    $scope.appState = "home";

    $scope.items = [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];

    $scope.remove = function (index) {
        $scope.items.splice(index, 1);
    }

    $scope.addItem = function () {
        $scope.items.push({title: $scope.addName, quantity: 1, price: $scope.addPrice});
        $scope.addName = "";
        $scope.addPrice = "";

        $scope.appState = "home";
    };
}