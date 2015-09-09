var Triarc;
(function (Triarc) {
    var Web;
    (function (Web) {
        var AutoSizeTextarea = (function () {
            function AutoSizeTextarea($timeout) {
                this.$timeout = $timeout;
                this.require = "ngModel";
                this.restrict = "A";
                this.scope = {
                    ngModel: "="
                };
                this.link = this.unboundLink.bind(this);
            }
            AutoSizeTextarea.prototype.unboundLink = function (scope, element, attrs, ngModel) {
                var _this = this;
                autosize(element);
                element.addClass("textarea-expand-animation");
                ngModel.$formatters.push(function () {
                    _this.$timeout(function () {
                        var nativeElement = element[0];
                        var evt = document.createEvent('Event');
                        evt.initEvent('autosize:update', true, false);
                        nativeElement.dispatchEvent(evt);
                    }, 100);
                });
            };
            AutoSizeTextarea.directiveId = "tlAutosize";
            return AutoSizeTextarea;
        })();
        Web.AutoSizeTextarea = AutoSizeTextarea;
    })(Web = Triarc.Web || (Triarc.Web = {}));
})(Triarc || (Triarc = {}));
/// <reference path="autosizetextarea.ts" />
var mod = angular.module("tlText", []);
mod.filter("tlEnum", [
    '$translate', function ($translate) {
        return function (val, enumType) {
            if (!angular.isNumber(val))
                return '';
            var enumValues = eval(enumType);
            var result = enumValues[val];
            if (!angular.isString(result))
                return '';
            return $translate.instant(result);
        };
    }
]);
mod.filter("tlEnumOrdinals", [function () {
        return function (val, enumType) {
            return Triarc.getOrdinals(eval(enumType));
        };
    }
]);
mod.directive("tlDotted", [
    '$animate', '$timeout', function ($animate, $timeout) {
        return {
            restricted: "A",
            scope: {
                dotted: '=',
                dottedShow: '=',
            },
            link: function (scope, element, attr) {
                var getClass = function () {
                    var cl = "dotted";
                    if (angular.isString(attr.dottedAnimate)) {
                        cl = attr.dottedAnimate;
                    }
                    return cl;
                };
                var update = function () {
                    element[0].innerText = scope.dotted;
                    //element.text(scope.dotted);
                    if (scope.dottedShow == true) {
                        $animate.addClass(element, getClass());
                    }
                    else {
                        $animate.removeClass(element, getClass(), function () {
                            element.dotdotdot();
                        });
                    }
                };
                scope.$watch("tl-dotted", function () {
                    update();
                });
                scope.$watch("tl-dottedShow", function () {
                    update();
                });
            }
        };
    }]);
mod.directive(Triarc.Web.AutoSizeTextarea.directiveId, function ($timeout) { return new Triarc.Web.AutoSizeTextarea($timeout); });

