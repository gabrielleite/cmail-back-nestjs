import { Controller, Get } from '@nestjs/common';

@Controller('emails')
export class EmailController {

    private emails: Array<any> = [
        {
            id: 1,
            from: 'gabriel.leite@alura.com.br',
            to: 'david.neves@alura.com.br',
            subject: 'Novo curso de NestJS',
            content: 'Fica ligado que tá pra ser lançado o novo curso de NestJS da Alura!'
        },
        {
            id: 2,
            from: 'gabriel.leite@alura.com.br',
            to: 'vanessa.tonini@alura.com.br',
            subject: 'Gravação NestJS',
            content: 'Gravações do novo curso de NestJS da Alura terminaram!'
        }
    ];

    @Get()
    public findAll(): Array<any> {
        return this.emails;
    }
}
