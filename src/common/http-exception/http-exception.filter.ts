import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Response, Request } from 'express';

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    // exception = error, host = request details, but without context of where it's from
    const ctx = host.switchToHttp();
    //host.switchToHttp() given the request detail context, now it knows its from Http
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    //check if its a web error or system crash
    const isHttpException = exception instanceof HttpException;

    const status = isHttpException ? exception.getStatus(): HttpStatus.INTERNAL_SERVER_ERROR;
    const message = isHttpException ? exception.getResponse() : 'INTERNAL SERVER ERROR';

    response.status(status).json({
      success: false,
      statusCode: status,
      path: request.url,
      error: message,
      timestamp: new Date().toISOString(),
    });
  }
}
