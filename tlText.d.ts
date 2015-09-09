declare module Triarc.Web {
    class AutoSizeTextarea implements angular.IDirective {
        private $timeout;
        static directiveId: string;
        require: string;
        restrict: string;
        scope: {
            ngModel: string;
        };
        link: any;
        constructor($timeout: angular.ITimeoutService);
        unboundLink(scope: any, element: any, attrs: any, ngModel: any): void;
    }
}
declare var mod: ng.IModule;
