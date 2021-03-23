import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {DataEvent, EventCommandType, EventQueryType} from "../model/event/data.event";
import {Coffee} from "../../coffee/model/coffee.model";

@Injectable({providedIn: 'root'})
export class EventDriverService {

  // Query stats management
  private eventQuerySubject: Subject<DataEvent<EventQueryType,string>> = new Subject<DataEvent<EventQueryType,string>>();
  public eventQuerySubjectObservable = this.eventQuerySubject.asObservable();

  // Command stats management
  private eventCommandSubject: Subject<DataEvent<EventCommandType,Coffee>> = new Subject<DataEvent<EventCommandType,Coffee>>();
  private eventCommandSubjectObservable = this.eventCommandSubject.asObservable();

  // publish data to subscribe
  public publishQueryEvent(dataEvent: DataEvent<EventQueryType,string>) {
    this.eventQuerySubject.next(dataEvent);
  }

  public publishCommandEvent(dataEvent: DataEvent<EventCommandType,Coffee>) {
    this.eventCommandSubject.next(dataEvent);
  }

  public subscribeCommandEvent(next: (value: DataEvent<EventCommandType,Coffee>) => void) {
    this.eventCommandSubjectObservable
      .subscribe(data => {
        next(data);
      })
  }

  public subscribeQueryEvent(next: (value: DataEvent<EventQueryType,string>) => void) {
    this.eventQuerySubjectObservable
      .subscribe(data => {
        next(data);
      })
  }

  public subscribeQueryAndCommandEvent(nextCommand: (value: DataEvent<EventCommandType,Coffee>) => void,
                                                     nextQuery: (value: DataEvent<EventQueryType,string>) => void) {
    this.subscribeCommandEvent(nextCommand);
    this.subscribeQueryEvent(nextQuery);
  }
}
