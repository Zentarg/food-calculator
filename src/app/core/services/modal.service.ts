import { ApplicationRef, Component, ComponentFactoryResolver, ComponentRef, EnvironmentInjector, Injectable, Injector, OnInit, Type, createComponent } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';
import { Subject, filter, firstValueFrom } from 'rxjs';
import { ModalSettings } from '../models/UIModels/ModalSettings';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: ComponentRef<ModalComponent>[] = [];

  constructor(private appRef: ApplicationRef, private environmentInjector: EnvironmentInjector, private router: Router) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.closeAll();
    })

  }

  open<T>(content: Type<T>, settings?: ModalSettings): Promise<{ result: Promise<any>, contentInstance: T }> {
    const resultSubject = new Subject<any>();
    const modalComponentRef = createComponent(ModalComponent, {
      environmentInjector: this.environmentInjector
    });
    this.appRef.attachView(modalComponentRef.hostView);

    // Set the title and close handlers
    modalComponentRef.instance.modalSettings = settings;
    modalComponentRef.instance.closeModal.subscribe(() => this.close(modalComponentRef));
    modalComponentRef.instance.closeModalWithResult.subscribe(result => this.close(modalComponentRef, result));

    // Load the content component dynamically
    const contentRef = modalComponentRef.instance.loadContent(content);

    // Append the modal component to the DOM
    const domElem = (modalComponentRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.modals.push(modalComponentRef);

    return Promise.resolve({
      result: firstValueFrom(resultSubject),
      contentInstance: contentRef.instance
    });
  }

  private close(modalComponentRef: ComponentRef<ModalComponent>, result?: any) {
    const resultSubject = new Subject<any>();

    if (result) {
      resultSubject.next(result);
    }
    resultSubject.complete();

    this.appRef.detachView(modalComponentRef.hostView);
    modalComponentRef.destroy();

    // Remove the modal from the tracked modals
    this.modals = this.modals.filter(modal => modal !== modalComponentRef);
  }

  private closeAll() {
    this.modals.forEach(modal => {
      this.close(modal);
    })
  }
}
