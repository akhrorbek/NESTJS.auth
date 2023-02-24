import { Catch } from "@nestjs/common/decorators";
import { HttpException } from "@nestjs/common/exceptions";
import { ArgumentsHost, ExceptionFilter } from "@nestjs/common/interfaces";

@Catch(HttpException)
export class Filter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {

        const ctx = host.switchToHttp()
        const response = ctx.getResponse()

        if(exception instanceof HttpException) {
            const ctx = host.switchToHttp()
            const response = ctx.getResponse()

            response
            .json(exception)
        } else {
            response.json({
                status: 500,
                message:'Internal error'
            })
        }
    }
}
