import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionFilter implements ExceptionFilter<any> {
  catch(exception: any, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const request = http.getRequest<Request>();
    const response = http.getResponse<Response>();

    response.status(exception.getStatus()).json({
      code: exception.getStatus(),
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message.message,
    });
  }
}
