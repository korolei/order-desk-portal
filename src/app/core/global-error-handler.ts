import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggingService } from './services/logging.service';
import { ErrorService } from './services/error.service';
import { NotificationService } from './services/notification.service';
import {WebApiError} from "../shared/models/web-api-error";
import {AppService} from "../app.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) { }

    handleError(error: Error | HttpErrorResponse) {
        const errorService = this.injector.get(ErrorService);
        const notifier = this.injector.get(NotificationService);
        const appService = this.injector.get(AppService);
        let message: string;
        if (error instanceof HttpErrorResponse) {
            // Server error
            message = ErrorService.getServerErrorMessage(error);
            notifier.showError(message);
            
            appService.loadingSubject.next(false);
        } else {
            // Client Error
            message = ErrorService.getClientErrorMessage(error);
            const errorLog = errorService.addContextInfo(error);
            const webApiError = new WebApiError(message, errorLog);
            const logger = this.injector.get(LoggingService);
            logger.logError(webApiError);
            appService.loadingSubject.next(false);
        }
    }
}