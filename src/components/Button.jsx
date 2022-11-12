import React from 'react';

function Button(props) {
    return (
        <button style={{width: "162px", 
                    height: "62px", 
                    background:`${props.bgColour}`,
                    borderStyle: 'solid',
                    borderColor: `${props.borderColour}`,
                    borderWidth: '1px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: "0px 7px 22px -6px rgba(33, 123, 244, 0.34)",
                    borderRadius: "14px",
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '14px',
                    lineHeight: '14px',
                    textAlign: 'center',
                    whiteSpace: 'pre-line',
                    }}>
            <p dangerouslySetInnerHTML={{__html: `${props.text}`}}></p>
        </button>
    )
}

export default Button;