import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import React from "react";
import {DialogType, MessageType, TypeDataDialogsPage} from "../../redux/state";

export const Dialogs = (props: TypeDataDialogsPage) => {
    let newMessageElement: any = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        if (newMessageElement.current.value.trim() !== '') {
            if(props.addDialogMessage) {
                props.addDialogMessage(text)
            }
            newMessageElement.current.value = ''
        }
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
    }

    return (
        <section className={s.dialogs}>
            <h1 className={s.dialogsTitle}>Dialogs</h1>
            <div className={s.dialogsWrapper}>
                <div className={s.dialogsItems}>
                    { props.dialogs.map((d: DialogType) => <DialogItem name={d.name} id={d.id}/>) }
                </div>
                <div className={s.messages}>
                    { props.messages.map((m: MessageType) => <Message message={m.message} id={m.id}/>) }

                    <div className={s.dialogForm}>
                        <textarea onChange={onMessageChange} ref={newMessageElement} placeholder="message" />
                        <button onClick={addMessage}>Enter</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
