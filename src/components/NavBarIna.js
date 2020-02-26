import React from 'react'
import {Button} from 'antd';
import '../App.css'
import {Row} from 'antd'

export default function NavBarIna() {
    return (
        <div>
            <Row type='flex' align="middle" className="gradientNav">
            <Button ghost>Default</Button>
            </Row>
        </div>
    )
}
