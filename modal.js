// // Get modal elements
// const modal = document.getElementById("myModal");
// const btn = document.getElementById("openModal");
// const span = document.getElementsByClassName("close")[0];

// // Open modal when button is clicked
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // Close modal when X is clicked
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // Close modal when clicking outside
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// popover

console.log('Script is running!');

        class Popover {
            constructor(triggerElement, popoverElement) {
                console.log('Popover constructor called');
                console.log('Trigger element:', triggerElement);
                console.log('Popover element:', popoverElement);

                this.triggerElement = triggerElement;
                this.popoverElement = popoverElement;
                this.closeButton = popoverElement.querySelector('#popoverClose');
                
                
                
                if (!triggerElement || !popoverElement) {
                    console.error('Missing trigger or popover element!');
                    return;
                }
                
                this.init();
            }

            init() {
                console.log('Initializing popover');
                this.triggerElement.addEventListener('click', (e) => {
                    console.log('Trigger clicked');
                    this.toggle();
                });
                
                // Close popover if clicked outside
                document.addEventListener('click', (event) => {
                    if (!this.popoverElement.contains(event.target) && 
                        event.target !== this.triggerElement) {
                        this.hide();
                    }
                });

                // Close button functionality
                if (this.closeButton) {
                    this.closeButton.addEventListener('click', () => this.hide());
                }
            }

            show() {
                console.log('Showing popover');
                
                // Get viewport dimensions
                const viewportWidth = screen.innerWidth;
                const viewportHeight = window.screen.innerHeight;
                
                // Get popover dimensions
                const popoverWidth = this.popoverElement.offsetWidth;
                const popoverHeight = this.popoverElement.offsetHeight;
                
                // Calculate center position
                const leftPosition = (viewportWidth - popoverWidth) / 2;
                const topPosition = (viewportHeight - popoverHeight) / 2;
                
                // Set position
                this.popoverElement.style.position = 'fixed'; // Make sure position is fixed
                this.popoverElement.style.top = `${topPosition}px`;
                this.popoverElement.style.left = `${leftPosition}px`;
                
                this.popoverElement.classList.add('visible');
            }

            hide() {
                console.log('Hiding popover');
                this.popoverElement.classList.remove('visible');
            }

            toggle() {
                this.popoverElement.classList.contains('visible') 
                    ? this.hide() 
                    : this.show();
            }
        }

        // Initialize the popover
        function initializePopover() {
            console.log('Attempting to initialize popover');
            const triggerElement = document.getElementById('popoverTrigger');
            const popoverElement = document.getElementById('myPopover');
            
            if (triggerElement && popoverElement) {
                new Popover(triggerElement, popoverElement);
            } else {
                console.error('Could not find trigger or popover element');
                console.log('Trigger element:', triggerElement);
                console.log('Popover element:', popoverElement);
            }
        }

        // Try multiple ways to ensure script runs
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializePopover);
        } else {
            initializePopover();
        }