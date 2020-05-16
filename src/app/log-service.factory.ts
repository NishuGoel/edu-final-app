import { DataService } from './data.service';
import { LoggerService } from './logger.service';

export function logServiceFactory(dataService: DataService) {
  let loggerService: LoggerService = new LoggerService();

  dataService.sendData('From the log service factory');
  return loggerService;
}
