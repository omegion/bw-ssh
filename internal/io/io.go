package io

import (
	"fmt"
	"io/ioutil"
	"os"
	"os/user"
	"path/filepath"
	"strings"

	"github.com/omegion/ssh-manager/internal"

	log "github.com/sirupsen/logrus"

	"github.com/omegion/ssh-manager/internal"
)

// WriteSSHKey creates file with given data and filename.
func WriteSSHKey(fileName string, data []byte) error {
	log.Debugln(fmt.Sprintf("Writing SSH key for %s.", fileName))

	usr, err := user.Current()
	if err != nil {
		return err
	}

	sshDirectory := filepath.Join(usr.HomeDir, ".ssh", "keys")

	if _, err = os.Stat(sshDirectory); os.IsNotExist(err) {
		//nolint:gomnd // change this later.
		err = os.Mkdir(sshDirectory, os.FileMode(0777))
		if err != nil {
			return err
		}
	}

	sshPath := filepath.Join(sshDirectory, fileName)

	//nolint:gomnd // change this later.
	err = ioutil.WriteFile(sshPath, data, os.FileMode(0600))
	if err != nil {
		return err
	}

	if !strings.Contains(sshPath, ".pub") {
		err = ssh.Add(sshPath, internal.NewCommander())
		if err != nil {
			return err
		}
	}

	return nil
}
