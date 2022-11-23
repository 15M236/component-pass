import React from 'react'

export default function Component(props) {
    return (
        <tr>
            <th>{props.value.name}</th>
            <th>{props.value.id}</th>
            <th>{props.value.PhoneNumber}</th>
            <th>{props.value.age}</th>
        </tr>
    )
}
