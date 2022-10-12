import React from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './../Components/Custom.scss'

function ToolTips(props) {
  return (
    <div>
      <OverlayTrigger
        className='tooltip-overlay'
        key='top'
        placement='top'
        overlay={
          <Tooltip id={`tooltip-top`} className='tooltip-overlay' >
            {props.value}
          </Tooltip>
        }
      >
        <Button variant="light">{props.title}</Button>
      </OverlayTrigger>
    </div>
  );
}

export default ToolTips