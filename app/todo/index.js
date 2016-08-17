import {HtmlElement} from 'cx/ui/HtmlElement';
import {Repeater} from 'cx/ui/Repeater';
import {TextField} from 'cx/ui/form/TextField';
import {Checkbox} from 'cx/ui/form/Checkbox';
import {Button} from 'cx/ui/Button';
import Controller from './Controller';

export default <cx>
    <div class="csb-todo-wrap" controller={Controller}>
        <div class="csb-todo">
            <h1>Todo list</h1>

            <div preserveWhitespace>
                <TextField style={{width: 320}}
                        value:bind="$page.text"
                        placeholder="Type a task name here"
                        required
                />
                <Button type="button" onClick="onAdd" disabled:expr="!{$page.text}">Add</Button>
            </div>

            <ul class="csb-task-list">
                <Repeater records:bind="$page.todos">
                    <li class="csb-task">
                        <Checkbox class={{ "css-task-done": {bind: '$record.done'} }}
                                text:tpl="{$record.text}" value:bind="$record.done"/>
                        
                        <button onClick="onRemove" text="x"/>
                    </li>
                </Repeater>
            </ul>
        </div>
    </div>
</cx>;