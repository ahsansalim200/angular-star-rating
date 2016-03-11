
describe('angular lst rating base component', function() {
    var $compile,
        $rootScope;

    beforeEach(module('angular.lst.rating.ui.component'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;

        $rootScope.starConfig = {
            totalNoOfStars: 5,
            isAnimated: true,
            colorBreak: false,
            noOfStarsFilled: 2,
            starClassList: {
                emptyUnanimatedStar: 'empty-unanimated-star',
                filledUnanimatedStar: 'filled-unanimated-star',
                emptyAnimatedStar: 'empty-animated-star animate',
                filledAnimatedStar: 'filled-animated-star animate',
                aboveColorBreak: 'above-color-break',
                belowColorBreak: 'below-color-break'
            }
        }
    }));

    it('Replaces the element with the appropriate content', function() {
        var element = $compile('<angular-lst-rating-directive total-no-of-stars="{{starConfig.totalNoOfStars}}" is-animated="{{starConfig.isAnimated}}" color-break="{{starConfig.colorBreak}}" no-of-stars-filled="starConfig.noOfStarsFilled" star-class-list="{{starConfig.starClassList}}"></angular-lst-rating-directive>')($rootScope);

        $rootScope.$digest();
        console.log(element[0].innerHTML.length);
        expect(element[0].innerHTML.length).toBeGreaterThan(1);
    });
});