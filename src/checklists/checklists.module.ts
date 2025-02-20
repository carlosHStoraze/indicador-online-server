import { Module } from "@nestjs/common";
import { ChecklistsService } from "./checklists.service";
import { ChecklistsController } from "./checklists.controller";

@Module({
  providers: [ChecklistsService],
  controllers: [ChecklistsController],
})
export class ChecklistsModule {}
