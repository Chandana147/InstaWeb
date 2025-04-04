import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Component } from "@angular/core";

export interface Element {
  id: number;
  name: string;
  type: string;
  content: string;
  position?: { x: number; y: number };  // Add position if needed
}

@Component({
  selector: 'app-drag-and-drop-builder',
  templateUrl: './drag-and-drop-builder.component.html',
  styleUrls: ['./drag-and-drop-builder.component.css']
})
export class DragAndDropBuilderComponent {

  selectedElement: Element | null = null;  // Keep track of the selected element
  
  // Array for storing dropped elements
  droppedElements: Element[] = [];

  selectElement(element: Element): void {
    this.selectedElement = element;  // Set selected element when clicked
  }

  // Define the type of elements
  elements: Element[] = [
    { id: 1, name: 'Text', type: 'text', content: 'Sample text' },
    { id: 2, name: 'Image', type: 'image', content: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Button', type: 'button', content: 'Click Me' }
  ];

  saveProperties(): void {
    if (this.selectedElement) {
      // Logic for saving selected element properties
      console.log('Saving properties for:', this.selectedElement);
    }
  }

  // Handle the drop event
  onDrop(event: CdkDragDrop<any[]>) {
    const element = event.item.data;
    const newElement: Element = { 
      ...element, 
      position: { x: event.item.getFreeDragPosition().x, y: event.item.getFreeDragPosition().y }
    };
    this.droppedElements.push(newElement);
  }

  // Other logic for handling selected element, saving properties, etc.
}
