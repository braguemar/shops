import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(Error)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = 500;

    this.log(exception);

    response.status(status).json({
      status,
      date: new Date().toLocaleString(),
      url: request.url,
      message: 'Unexpected error',
    });
  }

  private log(exception: Error) {
    Logger.error(exception.message, exception.stack, exception.name);
  }
}
