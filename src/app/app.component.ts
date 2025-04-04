import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Predefined list of elements that can be dragged
  elements = [
    { name: 'Text', type: 'text', content: 'Sample Text' },
    { name: 'Image', type: 'image', content: 'https://via.placeholder.com/100' },
    { name: 'Button', type: 'button', content: 'Click Me' },
    { name: 'Heading', type: 'heading', content: 'Sample Heading' },
    { name: 'Paragraph', type: 'paragraph', content: 'This is a sample paragraph.' },
    { name: 'Link', type: 'link', content: 'https://example.com', label: 'Visit Example' },
    { name: 'List', type: 'list', content: ['Item 1', 'Item 2', 'Item 3'] },
    { name: 'Divider', type: 'divider', content: '' },
    { name: 'Video', type: 'video', content: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
  ];

  // Array to hold the elements that have been dropped onto the canvas
  droppedElements: any[] = [];

  // Variable to hold the selected element for editing
  selectedElement: any = null;

  // Method that is triggered when an element is dropped
  onDrop(event: CdkDragDrop<any[]>) {
    console.log("Drag event:", event);
    
    // Get the dragged item
    const draggedItem = event.item.data; 
  
    // Add the dragged item to the dropped elements
    this.droppedElements.push(draggedItem);
  }
  

  // Method to select an element for editing when clicked
  editElement(element: any) {
    this.selectedElement = element;  // Set the selected element for editing
  }

  // Method to save the edited content when the form is submitted
  onSubmit() {
    console.log('Element edited:', this.selectedElement);
    // You can implement logic to update the element in the droppedElements array if needed
  }

  // Method to submit the final layout (e.g., sending the layout to the server or saving it)
  onSubmitFinalLayout() {
    console.log('Final Layout:', this.droppedElements);
    // Implement logic for final layout submission here
  }


}
