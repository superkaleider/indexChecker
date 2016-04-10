# indexChecker
useful factory to check the index of an id in a large array of objects. Good for next and previous controls in a crm type setup.

Usage in controller

 ```javascript
 var itemIndexPromise = indexCheck.getPosition(idToCheck, "nameofcollection");
    itemIndexPromise.then(function(itemIndex){
        console.log(itemIndex);
        $scope.indexNumber = itemIndex;
    });
