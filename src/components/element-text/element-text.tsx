import {createRef, FormEventHandler, useRef, useState} from 'react';
import ContentEditable from 'react-contenteditable';
import {useDispatch} from 'react-redux';
import {deleteElement, updateElement} from '../../store/actions';
import {ElementItem} from '../../types/element-item';

type ElementTextProps = {
    className: string,
    listType: string,
    placeholder: string
} & ElementItem;

export const ElementText = ({className, listType, tag, id, placeholder}: ElementTextProps): JSX.Element => {
    const text = useRef('');
    const dispatch = useDispatch();

    const handleChange = (evt: { target: { value: string; }; }) => {
        text.current = evt.target.value;
    };

    const handleDelete = () => dispatch(deleteElement({listType, id}));

    return (
        <div className={`element ${className}`} tabIndex={0}>
            <ContentEditable html={text.current} onChange={handleChange} tagName={tag} disabled={false} data-placeholder={placeholder}/>
            <button type="button" className="delete-btn" onClick={handleDelete}>
                <span className="visually-hidden">Удалить элемент</span>
            </button>
        </div>
    );
}
