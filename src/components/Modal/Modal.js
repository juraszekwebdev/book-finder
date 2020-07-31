import React from 'react';
import styled from "styled-components";

const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 5;
	padding: 0 1em;
	display: flex;
	flex-direction: column;
	justify-content: center;
	
	&::before {
		content: '';
		display: block;
		position: fixed;
		z-index: 4;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .75);
	}
	
	.modal {
		background-color: #fff;
		position: relative;
		z-index: 2000;
		
		.modal-heading {
			padding: 1em;
			font-size: 1.2em;
			font-weight: 700;
			color: #111;
			border-bottom: solid 1px #d7d7d7;
			.close-modal {
				position: absolute;
				top: 0;
				right: 0;
				width: 30px;
				height: 30px;
				font-size: 30px;
				color: #111;
				cursor: pointer;
				text-align: center;
			}
		}
		
		.modal-content {
			padding: 1em;
			max-height: 300px;
			overflow: auto;
			font-size: 0.95em;
			color: #111;
			line-height: 1.5;
		}
	}
`;


const Modal = props => {
	const closeModal = () => {
		props.triggerModal();
	};

	return (
		<ModalWrapper>
			<div className="modal">
				<div className="modal-heading">
					{props.heading}
					<div className="close-modal" onClick={closeModal}>x</div>
				</div>
				<div className="modal-content">
					{props.content}
				</div>
			</div>
		</ModalWrapper>
	);
};

export default Modal;