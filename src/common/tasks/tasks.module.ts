import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { RsshubModule } from '../../rsshub/rsshub.module';

@Module({
  imports: [RsshubModule],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
