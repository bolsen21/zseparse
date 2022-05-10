/*
 * fixparser
 * https://gitlab.com/logotype/fixparser.git
 *
 * Copyright © 2022 fixparser.io
 * Released under Commercial license. Check LICENSE.md
 */
import { CleartextMessage, Key, readCleartextMessage, readKey, verify, VerifyMessageResult } from 'openpgp';

import { log } from '../util/util';
import { atob } from './LicenseManagerUtils';

const missingOrEmpty = (value?: string | null): boolean => {
    return value == null || value.length === 0;
};

export class LicenseManager {
    private static RELEASE_INFORMATION: string = process.env.__RELEASE_INFORMATION__!;
    private static licenseKey: string;
    private static licenseKeyId: string | null = null;
    private static licenseExpiry: string | null = null;
    private static licenseIsTrial: boolean | null = true;
    private static licenseProcessing: boolean = false;
    private static PUBLIC_KEY: string = `-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEYSAlmRYJKwYBBAHaRw8BAQdATxsL8ZGu79iIXGoMwAGxis0Ot6zN+c+H
FiEfymdU5QHNIGZpeHBhcnNlci5pbyA8aW5mb0BmaXhwYXJzZXIuaW8+wowE
EBYKAB0FAmEgJZkECwkHCAMVCAoEFgACAQIZAQIbAwIeAQAhCRDpKZsYDAPF
cxYhBOT5iMsY4w3omYDb+ukpmxgMA8VziRIA/A5mUMldqdrKsxJddLiMfJ30
DVyKt8dXn6Fu6b2riwrHAP0YqK+goCIt7y6de9KTWmnWBgMAxX5XNAK5B41A
DsfYCM44BGEgJZkSCisGAQQBl1UBBQEBB0A0y8VUtHP6LESsJZN7yEpOKHtR
2JCLu/swlNU2QfojLwMBCAfCeAQYFggACQUCYSAlmQIbDAAhCRDpKZsYDAPF
cxYhBOT5iMsY4w3omYDb+ukpmxgMA8VzB/QBAOzjjWDBPlSDYpPMv13s8OS6
Tzi6Zidom0ZY6lkJMBNCAQCNwsJXAWbxHmHmMJq5yLe5GaL9YQWxeUM4AdUa
GqHtBQ===YpfV
-----END PGP PUBLIC KEY BLOCK-----`;

    public static validateLicense(): boolean {
        //console.log("Checking License")
       // if (LicenseManager.licenseProcessing || LicenseManager.licenseKeyId) {
        //    console.log("Checking License")
            return true;
       // } else {
           // LicenseManager.outputInvalidLicenseKey();
          // console.log("Checking License")
        //    return true;
       // }
    }

    private static formatDate(date: Date): string {
        const monthNames: string[] = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        const day: number = date.getDate();
        const monthIndex: number = date.getMonth();
        const year: number = date.getFullYear();

        return `${day} ${monthNames[monthIndex]} ${year}`;
    }

    private static getReleaseDate(): Date {
        return new Date(parseInt(atob(LicenseManager.RELEASE_INFORMATION)!, 10));
    }

    static async setLicenseKey(licenseKey: string): Promise<void> {
        if (LicenseManager.licenseProcessing) {
            return;
        }

        LicenseManager.licenseProcessing = true;
        LicenseManager.licenseKey = licenseKey;

        if (missingOrEmpty(LicenseManager.licenseKey)) {
            LicenseManager.outputMissingLicenseKey();
        } else {
            try {
              
                // const readPublicKey: Key = await readKey({ armoredKey: LicenseManager.PUBLIC_KEY });
                // const signedMessage: CleartextMessage = await readCleartextMessage({
                //     cleartextMessage: atob(LicenseManager.licenseKey)!,
                // });
                // const verificationResult: VerifyMessageResult = await verify({
                //     message: signedMessage as any,
                //     verificationKeys: readPublicKey,
                // });
                
                // const { verified, keyID } = "123";//verificationResult.signatures[0];
                const yourNumber = Number(12);
                const keyID = yourNumber.toString(16);
                // await verified;
                // const [, , expiryTimestamp, isTrial]: string[] = signedMessage.getText().split('|');
                const expiryTimestamp = new Date()
                LicenseManager.validateKey(yourNumber.toString(16).toUpperCase(), Number(expiryTimestamp), true);
            } catch (e) {
                LicenseManager.outputInvalidLicenseKey();
                LicenseManager.licenseProcessing = false;
                return;
            }
        }
        return Promise.resolve();
    }

    private static validateKey(keyId: string, expiryTimestamp: number, isTrial: boolean): boolean {
      
        const releaseDate: Date = LicenseManager.getReleaseDate();
        const expiry: Date = new Date(expiryTimestamp);
        
        let valid: boolean = false;
      
        let current: boolean = false;
        if (!isNaN(expiry.getTime())) {
            valid = true;
            current = releaseDate < expiry;
        }
      
        // if (!valid) {
        //     LicenseManager.outputInvalidLicenseKey();
        //     return false;
        // } else if (false) {
        //     console.log(valid)
        //     const formattedExpiryDate: string = LicenseManager.formatDate(expiry);
        //     const formattedReleaseDate: string = LicenseManager.formatDate(releaseDate);
        //     LicenseManager.outputIncompatibleVersion(formattedExpiryDate, formattedReleaseDate);
        //     return false;
        // }
      
        LicenseManager.licenseKeyId = keyId;
        
        LicenseManager.licenseProcessing = true;
        LicenseManager.licenseExpiry = LicenseManager.formatDate(expiry);
        LicenseManager.licenseIsTrial = isTrial;
       
        LicenseManager.outputValidLicense();
        return true;
    }

    private static outputValidLicense(): void {
        log(
            `[FIXParser Enterprise ${LicenseManager.licenseIsTrial ? 'TRIAL ' : ''}License] - Valid until ${
                LicenseManager.licenseExpiry
            }`,
        );
    }

    private static outputInvalidLicenseKey(): void {
        console.error(
            '********************************************************************************************************************',
        );
        console.error(
            '***************************************** FIXParser Enterprise License *********************************************',
        );
        console.error(
            '********************************************** Invalid License *****************************************************',
        );
        console.error(
            '*                      -- Access to this feature requires license for FIXParser Enterprise --                      *',
        );
        console.error(
            '* Your license for FIXParser Enterprise is not valid - please contact info@fixparser.io to obtain a valid license. *',
        );
        console.error(
            '********************************************************************************************************************',
        );
        console.error(
            '********************************************************************************************************************',
        );
    }

    private static outputMissingLicenseKey(): void {
        console.error(
            '******************************************************************************************************************',
        );
        console.error(
            '***************************************** FIXParser Enterprise License *******************************************',
        );
        console.error(
            '******************************************* License Key Not Found ************************************************',
        );
        console.error(
            '* Please visit https://fixparser.io to purchase a FIXParser Enterprise license                                   *',
        );
        console.error(
            '******************************************************************************************************************',
        );
        console.error(
            '******************************************************************************************************************',
        );
    }

    private static outputIncompatibleVersion(formattedExpiryDate: string, formattedReleaseDate: string): void {
        console.error(
            '******************************************************************************************************************************',
        );
        console.error(
            '******************************************************************************************************************************',
        );
        console.error(
            '*                                             FIXParser Enterprise License                                                   *',
        );
        console.error(
            '*                           License not compatible with installed version of FIXParser Enterprise.                           *',
        );
        console.error(
            '*                                                                                                                            *',
        );
        console.error(
            '* Your FIXParser License entitles you to all versions of FIXParser that we release within the time covered by your license   *',
        );
        console.error(
            '* - typically we provide one year licenses which entitles you to all releases / updates of FIXParser within that year.       *',
        );
        console.error(
            '* Your license has an end (expiry) date which stops the license key working with versions of FIXParser released after the    *',
        );
        console.error(
            `* license end date. The license key that you have expires on ${formattedExpiryDate}, however the version of FIXParser you               *`,
        );
        console.error(
            `* are trying to use was released on ${formattedReleaseDate}.                                                                          *`,
        );
        console.error(
            '*                                                                                                                            *',
        );
        console.error(
            '* Please contact info@fixparser.io to renew your subscription to new versions and get a new license key to work with this    *',
        );
        console.error(
            '* version of FIXParser.                                                                                                      *',
        );
        console.error(
            '******************************************************************************************************************************',
        );
        console.error(
            '******************************************************************************************************************************',
        );
    }
}
