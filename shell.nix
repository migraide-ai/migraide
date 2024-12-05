{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs # This will include npm
    # Add any additional packages you might need
  ];

  shellHook = ''
    echo "Node.js version: $(node --version)"
    echo "npm version: $(npm --version)"
  '';
}
