class HaloGeneric {
    /**
     * Method generik untuk menyapa user
     * @template T
     * @param {T} namaUser - Nama user dengan tipe generik
     */
    static SapaUser(namaUser) {
        return `Halo user ${namaUser}`;
    }
}

// Fungsi main sebagai entry point program
function main() {
    const sapaan = HaloGeneric.SapaUser("Hamid");
    console.log(sapaan); // Output hanya 1 kalimat
}

// Eksekusi program
main();