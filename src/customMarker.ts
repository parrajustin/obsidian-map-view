import { App, TFile } from 'obsidian';
import { MapState } from './mapState';
import { CustomMarker } from './markers';

/**
 * Create custom markers from the input map state.
 * @param state
 * @returns
 */
export function createCustomMarkers(app: App, state: MapState): CustomMarker[] {
    if (state.customMarker == undefined) {
        return [];
    }
    const results: CustomMarker[] = [];
    for (const marker of state.customMarker) {
        const file = app.vault.getAbstractFileByPath(marker.docId);
        if (file instanceof TFile) {
            results.push(new CustomMarker(marker, file));
            console.log('got correct file');
        } else {
            console.log('using random');
            results.push(new CustomMarker(marker, app.vault.getFiles()[0]));
        }
    }
    return results;
}
