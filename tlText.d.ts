declare module Triarc.Web {
    class AutoSizeTextarea implements ng.IDirective {
        private $timeout;
        static directiveId: string;
        require: string;
        restrict: string;
        scope: {
            ngModel: string;
        };
        link: any;
        constructor($timeout: ng.ITimeoutService);
        unboundLink(scope: any, element: any, attrs: any): void;
    }
}
declare var mod: ng.IModule;
