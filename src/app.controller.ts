import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';
import { UpdateTransactionDTO } from './dto/update-transaction.dto';

@Controller('api/transaction')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  async createTransaction(@Body() data: CreateTransactionDTO) {
    const createdTransaction = await this.appService.createTransaction(data);
    return createdTransaction;
  }

  @Get('/:id')
  async getTransactionById(@Param('id') id: string) {
    const transaction = await this.appService.getTransactionById(id);
    return transaction;
  }

  @Get('/')
  async getTransactions() {
    const transactions = await this.appService.getTransaction();
    return transactions;
  }

  @Put('/:id')
  async updateTransaction(
    @Body() data: UpdateTransactionDTO,
    @Param('id') id: string,
    ) {
      const transactions = await this.appService.updateTransaction(id, data);
      return transactions;
    }
    
    @Delete('/:id')
    async deleteTransaction(@Param('id') id: string) {
      const transactions = await this.appService.deleteTransaction(id);
      return transactions;
    }

    @Get('/dashboard/')
    async getDashboard() {
      const dashboard = await this.appService.getDashboard();
      return dashboard;
    }
}
