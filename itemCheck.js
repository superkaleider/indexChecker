app.factory('indexCheck', function($http, $q) {
    var itemPosition = {
        getPosition: function(query_id, collection) {
            return $q(function(resolve, reject) {
                $http({
                    method: 'GET',
                    url: '/' + collection,
                })
                    .success(function(collectionObj) {
                        var itemIndex = getIndex(collectionObj, query_id, "id");
                        resolve(itemIndex);
                    }).error(function(error){
                    	reject("rejected");
                    });
            })
        }
    }

    function getIndex(arr, val, key) {
        var l = arr.length,
            k = 0;
        for (k = 0; k < l; k = k + 1) {
            if (arr[k][key] === val) {
                return k;
            }
        }
        return false;
    }

    return itemPosition;
});
