import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from "react-hook-form";
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Field, FieldLabel } from '@/components/ui/field';
import { Textarea } from '@/components/ui/textarea';

import ExternalLinkIcon from '@/components/custom/ExternalLinkIcon';

import './MessageForm.css'

const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    message: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export default function MessageForm() {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            message: "",
        }
    });

    function onSubmit(data: FormValues) {
        console.log(data);//debug
        let {
            firstName,
            lastName,
            message
        } = data;
        if (!firstName && !lastName) {
            firstName = "someone";
            lastName = "cool";
        }
        message = encodeURIComponent(message);
        const subject = encodeURIComponent(`Message from ${firstName} ${lastName}`)
        window.location.href = `mailto:paulenrade1@gmail.com?subject=${subject}&body=${message}`;
    }

    return (
        <>
            <div>
                <form
                    id="form-msg"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="flex flex-row form-row">
                        <Controller
                            name="firstName"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field
                                    data-invalid={fieldState.invalid}
                                    className="mr-5"
                                >
                                    <FieldLabel className="form-label" htmlFor="form-msg-first-name">
                                        First Name
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-msg-first-name"
                                        className="form-field"
                                        placeholder="Super"
                                        autoComplete="off"
                                    />
                                </Field>
                            )}
                        />
                        <Controller
                            name="lastName"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field
                                    data-invalid={fieldState.invalid}
                                    className="ml-5"
                                >
                                    <FieldLabel className="form-label" htmlFor="form-msg-last-name">
                                        Last Name
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-msg-last-name"
                                        className="form-field"
                                        placeholder="Mario"
                                        autoComplete="off"
                                    />
                                </Field>
                            )}
                        />

                    </div>
                    <Controller
                        name="message"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field
                                data-invalid={fieldState.invalid}
                                className="form-row"
                            >
                                <FieldLabel className="form-label" htmlFor="form-msg-content">
                                    Message
                                </FieldLabel>
                                <Textarea
                                    {...field}
                                    id="form-msg-content"
                                    className="form-field h-50"
                                    placeholder="Your beautiful prose here"
                                    autoComplete="off"
                                />
                            </Field>
                        )}
                    />
                </form>
            </div>
            <div>
                <Field orientation="horizontal">
                    <Button
                        type="submit"
                        form="form-msg"
                        className="form-button-submit"
                    >
                        Send Email<ExternalLinkIcon />
                    </Button>
                    <Button
                        type="button"
                        className="form-button"
                        onClick={() => form.resetField("message")}
                    >
                        Clear message
                    </Button>
                    <Button
                        type="button"
                        className="form-button"
                        onClick={() => form.reset()}
                    >
                        Clear all
                    </Button>
                </Field>
            </div>
        </>
    );
}