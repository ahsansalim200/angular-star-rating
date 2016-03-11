(function(){angular.module("angular.lst.rating.ui.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("lst/ui/templates/angular-lst-rating.dir.html","<div class=\"angular-lst-rating\">\n    <ul class=\"star-list\">\n        <div class=\"stars\" ng-repeat=\"star in starList track by $index\">\n            <div class=\"{{star.requiredClass}}\">\n                <div class=\"empty\">\n                    <div class=\"inner\">\n                        <i class=\"fa fa-star\"></i>\n                    </div>\n                </div>\n                <div class=\"fill\">\n                    <div class=\"inner\">\n                        <i class=\"fa fa-star\"></i>\n                    </div>\n                </div>\n                <div class=\"zoom\">\n                    <div class=\"inner\">\n                        <i class=\"fa fa-star\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ul>\n</div>");}]);})();
(function(angular) {
    function angularLstRatingDirective() {
        var config = {
            restrict: 'E',
            template: template,
            replace: true,
            scope: {
                totalNoOfStars: '@',
                isAnimated: '@',
                colorBreak: '@',
                noOfStarsFilled: '=',
                starClassList: '@'
            },
            link: angularLstRatingLink
        };

        return config;
    }

    /*jshint ignore: start */
    var template =
            '<div class="angular-lst-rating">\
                <ul class="star-list">\
                    <div class="stars" ng-repeat="star in starList track by $index">\
                        <div class="{{star.requiredClass}}">\
                            <div class="empty">\
                                <div class="inner">\
                                    <i class="fa fa-star"></i>\
                                </div>\
                            </div>\
                            <div class="fill">\
                                <div class="inner">\
                                    <i class="fa fa-star"></i>\
                                </div>\
                            </div>\
                            <div class="zoom">\
                                <div class="inner">\
                                    <i class="fa fa-star"></i>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </ul>\
            </div>';
    /*jshint ignore: end */
    function angularLstRatingLink (scope) {
        scope.refreshStarList = function() {
            var starClassList = JSON.parse(scope.starClassList);
            var starList = [];
            for (var i = 0; i < scope.totalNoOfStars; i++) {
                var star = {};

                if(scope.isAnimated.toLowerCase() === 'true') {
                    if(i < scope.noOfStarsFilled) {
                        star.requiredClass = starClassList.filledAnimatedStar;
                        star.filled = true;
                    } else {
                        star.requiredClass = starClassList.emptyAnimatedStar;
                    }
                }
                else {
                    if(scope.colorBreak.toLowerCase() !== 'false') {
                        if(scope.noOfStarsFilled < parseInt(scope.colorBreak) && i < scope.noOfStarsFilled) {
                            star.requiredClass = starClassList.belowColorBreak;
                        }
                        else if(scope.noOfStarsFilled >= parseInt(scope.colorBreak) && i < scope.noOfStarsFilled) {
                            star.requiredClass = starClassList.aboveColorBreak;
                        } else {
                            star.requiredClass = starClassList.emptyUnanimatedStar;
                        }
                    }
                    else {
                        if(i < scope.noOfStarsFilled) {
                            star.requiredClass = starClassList.filledUnanimatedStar;
                        } else {
                            star.requiredClass = starClassList.emptyUnanimatedStar;
                        }
                    }
                }
                starList.push(star);
            }
            scope.starList = starList;
        };
        scope.$watch('noOfStarsFilled', function(oldValue, newValue) {
            scope.refreshStarList();
        });
    }

    angular.module('angular.lst.rating.ui.component', [])
        .directive('angularLstRatingDirective', angularLstRatingDirective);

})(angular);