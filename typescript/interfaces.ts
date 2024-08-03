interface ContactForm {
    name: string;
    email: string;
    message: string;
}

class ContactFormHandler {
    private form: HTMLFormElement;
    private formData: ContactForm;

    constructor(formId: string) {
        this.form = document.getElementById(formId) as HTMLFormElement;
        this.formData = { name: '', email: '', message: '' };
        this.initialize();
    }

    private initialize(): void {
        this.form.addEventListener('submit', (event) => this.handleSubmit(event));
    }

    private handleSubmit(event: Event): void {
        event.preventDefault();
        this.formData = {
            name: (this.form.querySelector('input[name="name"]') as HTMLInputElement).value,
            email: (this.form.querySelector('input[name="email"]') as HTMLInputElement).value,
            message: (this.form.querySelector('textarea[name="message"]') as HTMLTextAreaElement).value,
        };

        if (this.validateFormData(this.formData)) {
            this.submitForm(this.formData);
        } else {
            console.error("Form validation failed");
        }
    }

    private validateFormData(data: ContactForm): boolean {
        // Simple validation: check if all fields are filled
        return data.name !== '' && data.email !== '' && data.message !== '';
    }

    private submitForm(data: ContactForm): void {
        console.log("Form submitted", data);
        // Add actual form submission logic here (e.g., AJAX request)
    }
}

// Initialize form handler
const contactFormHandler = new ContactFormHandler('contactForm');
