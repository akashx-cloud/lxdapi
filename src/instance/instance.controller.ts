import { Controller, Post } from '@nestjs/common';
import lxd from 'node-lxd';

@Controller('instance')
export class InstanceController {
  @Post('create')
  CreateInstance() {
    const client = lxd();
    client.create('myContainer', 'ubuntu', function (err, container) {
      container.start(function (err) {
        if (!err) console.log('Started ' + container.name());
      });
    });
    return [];
  }
}
