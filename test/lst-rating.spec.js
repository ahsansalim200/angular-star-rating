
describe('lst rating base component', function() {
    var $compile,
        $rootScope;

    beforeEach(module('lst.rating.ui.component'));

    beforeEach(inject(function(_$compile_, _$rootScope_, _STAR_CLASS_LIST_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;

        $rootScope.starConfig = {
            totalNoOfStars: 5,
            isAnimated: true,
            colorBreakPoint: false,
            noOfPoints: 2,
            totalNoOfPoints: 5
        }

        STAR_CLASS_LIST = _STAR_CLASS_LIST_;
    }));

    it('Replaces the element with the appropriate content', function() {
        var element = $compile('<lst-rating total-no-of-stars={{starConfig.totalNoOfStars}} is-animated="{{starConfig.isAnimated}}" color-break-point="{{starConfig.colorBreakPoint}}" no-of-points="starConfig.noOfPoints" total-no-of-points="{{starConfig.totalNoOfPoints}}" star-class-list="{{starConfig.starClassList}}"></lst-rating>')($rootScope);

        $rootScope.$digest();
        console.log(element[0].innerHTML.length);
        expect(element[0].innerHTML.length).toBeGreaterThan(1);
    });
});