/*
 * @Author: LogIN-
 * @Date:   2019-01-23 15:04:44
 * @Last Modified by:   LogIN-
 * @Last Modified time: 2019-04-03 09:55:51
 */

/**
 * [downloadItemsTemplate description]
 * @param  {array} items Array containing URLS to download files
 * @return {string}
 */
export function downloadItemsTemplate(items) {
	let template = "";

	items.forEach(function(item) {
		template += '<a class="alert_download_item" href="' + item["download_url"] + '" target="_blank" title="' + item["filename"] + '">' + item["filename"] + "</a>";
	});

	return template;
}