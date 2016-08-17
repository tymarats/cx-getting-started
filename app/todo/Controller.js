import {Controller} from 'cx/ui/Controller';

export default class extends Controller {
    init() {
        super.init();
        this.store.set('$page.todos', []);
    }

    onAdd() {
        var items = this.store.get('$page.todos');

        var id = items.reduce((acc, item) => Math.max(acc, item.id), 0) + 1;
        items = items.concat({
            id: id,
            text: this.store.get('$page.text') || `Untitled (${id})`,
            done: false
        });

        this.store.set('$page.todos', items);
        this.store.set('$page.text', null);
    }

    onRemove(e, {store}) {
        e.preventDefault();
        var id = store.get('$record.id');
        var items = this.store.get('$page.todos');
        this.store.set('$page.todos', items.filter(item => item.id !== id));
    }
}