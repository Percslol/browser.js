import { css } from "dreamland/core";
import { createMenuCustom } from "../Menu";
import { SiteInformationPopup } from "../SiteInformationPopup";
import { browser } from "../../Browser";
import { Icon } from "../Icon";
import { emToPx } from "../../utils";
import { iconOptions } from "../../icons";

export function SiteOptionsButton() {
	return (
		<button
			on:click={(e: MouseEvent) => {
				createMenuCustom(
					{
						left: (e.target as HTMLElement).getBoundingClientRect().left,
						top: emToPx(2.5) + 40,
					},
					<SiteInformationPopup tab={browser.activetab}></SiteInformationPopup>
				);
				e.preventDefault();
				e.stopPropagation();
			}}
		>
			<Icon icon={iconOptions}></Icon>
		</button>
	);
}
SiteOptionsButton.style = css`
	:scope {
		width: 100%;
		cursor: pointer;
		padding: 0;
		margin: 0;
		background: none;
		outline: none;
		border: none;
		color: var(--fg);
		font-size: 1em;
		padding: 0.1em;
		border-radius: 0.2em;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--bg01);
	}
	:scope:hover {
		background: var(--bg02);
	}
`;
