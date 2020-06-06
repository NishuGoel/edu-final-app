import { DataService } from '../app/data.service';
import { LoggerService } from '../app/logger.service';

export function logServiceFactory(dataService: DataService) {
  let loggerService: LoggerService = new LoggerService();

  dataService.sendData('From the log service factory');
  return loggerService;
}
