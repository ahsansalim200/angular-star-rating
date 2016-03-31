(function(angular) {
    function lstRatingDirective() {
        var config = {
            restrict: 'E',
            templateUrl: 'lst/ui/templates/lst-rating.dir.html',
            replace: true,
            scope: {
                totalNoOfStars: '@',
                isAnimated: '@',
                colorBreakPoint: '@',
                noOfPoints: '=',
                totalNoOfPoints: '@'
            },
            link: lstRatingLink
        };

        return config;
    }
    var STAR_CLASS_LIST = {
        emptyUnanimatedStar: 'empty-unanimated-star',
        filledUnanimatedStar: 'filled-unanimated-star',
        emptyAnimatedStar: 'empty-animated-star animate',
        filledAnimatedStar: 'filled-animated-star animate',
        aboveColorBreak: 'filled-unanimated-star',
        belowColorBreak: 'filled-alternate-unanimated-star',
        starIcon: 'fa fa-star',
        emptyStarIcon: 'fa fa-star-o'
    };

    function lstRatingLink(scope) {
        scope.refreshStarList = function() {
            //var starClassList = JSON.parse(scope.starClassList);
            var noOfStarsFilled = Math.round((scope.totalNoOfStars / scope.totalNoOfPoints) * scope.noOfPoints),
            starList = [];
            for (var i = 0; i < scope.totalNoOfStars; i++) {
                var star = {};
                star.starIcon = STAR_CLASS_LIST.starIcon;
                star.emptyStarIcon = STAR_CLASS_LIST.emptyStarIcon;
                if (scope.isAnimated.toLowerCase() === 'true') {
                    if (i < noOfStarsFilled) {
                        star.requiredClass = STAR_CLASS_LIST.filledAnimatedStar;
                    } else {
                        star.requiredClass = STAR_CLASS_LIST.emptyAnimatedStar;
                    }
                } else {
                    if (scope.colorBreakPoint) {
                        var colorBreak = Math.round((scope.totalNoOfStars / scope.totalNoOfPoints) *
                            parseInt(scope.colorBreakPoint));
                        if (noOfStarsFilled < colorBreak && i < noOfStarsFilled) {
                            star.requiredClass = STAR_CLASS_LIST.belowColorBreak;
                        } else if (noOfStarsFilled >= colorBreak && i < noOfStarsFilled) {
                            star.requiredClass = STAR_CLASS_LIST.aboveColorBreak;
                        } else {
                            star.requiredClass = STAR_CLASS_LIST.emptyUnanimatedStar;
                        }
                    } else {
                        if (i < noOfStarsFilled) {
                            star.requiredClass = STAR_CLASS_LIST.filledUnanimatedStar;
                        } else {
                            star.requiredClass = STAR_CLASS_LIST.emptyUnanimatedStar;
                        }
                    }
                }
                starList.push(star);
            }
            scope.starList = starList;
        };
        scope.$watch('noOfPoints', function(oldValue, newValue) {
            scope.refreshStarList();
        });
    }

    angular.module('lst.rating.ui.component', ['lst.rating.ui.templates'])
        .directive('lstRating', lstRatingDirective)
        .constant('STAR_CLASS_LIST', STAR_CLASS_LIST);

})(angular);
