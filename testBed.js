var gardedStarApp = angular.module('gradedStarApp', ['lst.rating.ui.component']);

gardedStarApp
	.controller('mainController', ['$scope', function($scope) {
		/*$scope.starConfig = {
			totalNoOfStars: 5,
			isAnimated: true,
			colorBreak: false,
			noOfStarsFilled: 2,
			starClassList: {
				emptyUnanimatedStar: 'empty-unanimated-star',
				filledUnanimatedStar: 'filled-unanimated-star',
				emptyAnimatedStar: 'empty-animated-star',
				filledAnimatedStar: 'filled-animated-star',
				aboveColorBreak: 'above-color-break',
				belowColorBreak: 'below-color-break'
			}
		}*/
		$scope.starConfig2 = {
			totalNoOfStars: 5,
			isAnimated: true,
			colorBreakPoints: false,
			noOfPoints: 2,
            totalNoOfPoints: 5
		}

        $scope.starConfig3 = {
            totalNoOfStars: 5,
            isAnimated: false,
            colorBreakPoints: false,
            noOfPoints: 2,
            totalNoOfPoints: 5
        }
        $scope.starConfig4 = {
            totalNoOfStars: 5,
            isAnimated: false,
            colorBreakPoints: false,
            noOfPoints: 2,
            totalNoOfPoints: 5,
            starClassList: {
                emptyUnanimatedStar: 'empty-unanimated-star',
                filledUnanimatedStar: 'filled-unanimated-star',
                emptyAnimatedStar: 'empty-animated-star animate',
                filledAnimatedStar: 'filled-animated-star animate',
                aboveColorBreak: 'above-color-break',
                belowColorBreak: 'below-color-break',
                starIcon: 'fa fa-star'
            }
        }

        $scope.starConfig5 = {
            totalNoOfStars: 5,
            isAnimated: false,
            colorBreakPoints: 3,
            noOfPoints: 2,
            totalNoOfPoints: 5,
            starClassList: {
                emptyUnanimatedStar: 'empty-unanimated-star',
                filledUnanimatedStar: 'filled-unanimated-star',
                emptyAnimatedStar: 'empty-animated-star animate',
                filledAnimatedStar: 'filled-animated-star animate',
                aboveColorBreak: 'filled-unanimated-star',
                belowColorBreak: 'filled-red-unanimated-star',
                starIcon: 'fa fa-star'
            }
        }

        $scope.starConfig6 = {
            totalNoOfStars: 8,
            isAnimated: false,
            colorBreakPoints: 3,
            noOfPoints: 4,
            totalNoOfPoints: 5,
            starClassList: {
                emptyUnanimatedStar: 'empty-unanimated-star',
                filledUnanimatedStar: 'filled-unanimated-star',
                emptyAnimatedStar: 'empty-animated-star animate',
                filledAnimatedStar: 'filled-animated-star animate',
                aboveColorBreak: 'filled-unanimated-star',
                belowColorBreak: 'filled-red-unanimated-star',
                starIcon: 'fa fa-star'
            }
        }
	}]);
