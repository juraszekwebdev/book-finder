import React, {useState} from "react";
import styled from "styled-components";
import Button from "../Global/Form/Button";
import Modal from "../Modal/Modal";

const StyledItem = styled.div`
	padding-bottom: 1em;
	@media screen and (min-width: 1199px) {
		display: flex;
		padding: 1em;
		width: 25%;
	}
	
	@media screen and (min-width: 625px) and (max-width: 1199px) {
		display: flex;
		padding: 1em;
		width: 50%;
	}
	
	.item-wrapper {
		background-color: #fff;
		padding: 1em;
		width: 100%;
		display: flex;
		flex-direction: column;
		
		.item-content {
			flex: 1 0 auto;
			display: flex;
			
			.image {
				margin-right: 1em;
				max-width: 35%;
				flex: 1 1 35%;
			
				img {
					width: 100%;
					height: auto;
				}
			}
			
			.content {
				max-width: 65%;
				flex: 1 1 65%;
			
				.title {
					font-size: 0.93em;
					border-bottom: solid 1px #d7d7d7;
					padding-bottom: 0.5em;
				} 
			
				.properties {
					ul {
						list-style: none;
						margin: 0;
						padding: 0;
					
						li {
							border-bottom: solid 1px #d7d7d7;
							font-size: 0.85em;
							padding: 0.5em 0;
						}
					}
				}
			}
		}
		
		.actions {
			text-align: center;
			margin-top: 1em;
			display: flex;
			align-items: center;
			justify-content: space-around;
			
			
			& > * {
			}
		}
	}
`;

const Item = props => {
	const {item} = props;
	const [isModalOpen, setIsModalOpen] = useState(false);

	const triggerModal = () => {
		setIsModalOpen(!isModalOpen);
	}
	return (
		<StyledItem>
			{isModalOpen && <Modal
				triggerModal={triggerModal}
				heading={"Book description"}
				content={item.volumeInfo.description}
			/>}
			<div className="item-wrapper">
				<div className="item-content">
					<div className="image">
						{item.volumeInfo.imageLinks ? <img src={item.volumeInfo.imageLinks.thumbnail} alt=""/> :
							<div className="default-image"/>}
					</div>
					<div className="content">
						<div className="title">
							<strong>{item.volumeInfo.title.substring(0,30)}...</strong>
						</div>
						<div className="properties">
							<ul>
								<li>
									Author<br/>
									<strong>{item.volumeInfo.authors ? item.volumeInfo.authors[0] : "none"}</strong>
								</li>
								<li>
									Release year<br/>
									<strong>{item.volumeInfo.publishedDate}</strong>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="actions">
					<Button type="button" onClick={triggerModal}>
						Description
					</Button>
					{item.saleInfo.buyLink && <Button as="a" href={item.saleInfo.buyLink}>Buy</Button>}
				</div>
			</div>

		</StyledItem>
	)
}

export default Item;